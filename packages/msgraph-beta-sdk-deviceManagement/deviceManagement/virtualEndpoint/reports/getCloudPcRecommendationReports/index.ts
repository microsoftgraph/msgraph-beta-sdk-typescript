/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { CloudPcReportName, CloudPcReportNameObject } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetCloudPcRecommendationReportsPostRequestBody}
 */
// @ts-ignore
export function createGetCloudPcRecommendationReportsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetCloudPcRecommendationReportsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetCloudPcRecommendationReportsPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetCloudPcRecommendationReportsPostRequestBody(getCloudPcRecommendationReportsPostRequestBody: Partial<GetCloudPcRecommendationReportsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getCloudPcRecommendationReportsPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getCloudPcRecommendationReportsPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getCloudPcRecommendationReportsPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "orderBy": n => { getCloudPcRecommendationReportsPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "reportName": n => { getCloudPcRecommendationReportsPostRequestBody.reportName = n.getEnumValue<CloudPcReportName>(CloudPcReportNameObject); },
        "search": n => { getCloudPcRecommendationReportsPostRequestBody.search = n.getStringValue(); },
        "select": n => { getCloudPcRecommendationReportsPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "skip": n => { getCloudPcRecommendationReportsPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getCloudPcRecommendationReportsPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetCloudPcRecommendationReportsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The filter property
     */
    filter?: string | null;
    /**
     * The groupBy property
     */
    groupBy?: string[] | null;
    /**
     * The orderBy property
     */
    orderBy?: string[] | null;
    /**
     * The reportName property
     */
    reportName?: CloudPcReportName | null;
    /**
     * The search property
     */
    search?: string | null;
    /**
     * The select property
     */
    select?: string[] | null;
    /**
     * The skip property
     */
    skip?: number | null;
    /**
     * The top property
     */
    top?: number | null;
}
/**
 * Provides operations to call the getCloudPcRecommendationReports method.
 */
export interface GetCloudPcRecommendationReportsRequestBuilder extends BaseRequestBuilder<GetCloudPcRecommendationReportsRequestBuilder> {
    /**
     * Get the device recommendation reports for Cloud PCs, such as the usage category report. The usage category report categorizes a Cloud PC as Undersized, Oversized, Rightsized, or Underutilized, and also provides the recommended SKU when the Cloud PC isn't Rightsized.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Starting from July 01, 2025, this API (&apos;getCloudPcRecommendationReports&apos;) will be deprecated and no longer supported. Please use the retrieveCloudPcRecommendationReports API. as of 2025-02/getCloudPcRecommendationReports on 2025-02-27 and will be removed 2025-07-01
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcreports-getcloudpcrecommendationreports?view=graph-rest-beta|Find more info here}
     */
     post(body: GetCloudPcRecommendationReportsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get the device recommendation reports for Cloud PCs, such as the usage category report. The usage category report categorizes a Cloud PC as Undersized, Oversized, Rightsized, or Underutilized, and also provides the recommended SKU when the Cloud PC isn't Rightsized.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Starting from July 01, 2025, this API (&apos;getCloudPcRecommendationReports&apos;) will be deprecated and no longer supported. Please use the retrieveCloudPcRecommendationReports API. as of 2025-02/getCloudPcRecommendationReports on 2025-02-27 and will be removed 2025-07-01
     */
     toPostRequestInformation(body: GetCloudPcRecommendationReportsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetCloudPcRecommendationReportsPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetCloudPcRecommendationReportsPostRequestBody(writer: SerializationWriter, getCloudPcRecommendationReportsPostRequestBody: Partial<GetCloudPcRecommendationReportsPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getCloudPcRecommendationReportsPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getCloudPcRecommendationReportsPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getCloudPcRecommendationReportsPostRequestBody.groupBy);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getCloudPcRecommendationReportsPostRequestBody.orderBy);
    writer.writeEnumValue<CloudPcReportName>("reportName", getCloudPcRecommendationReportsPostRequestBody.reportName);
    writer.writeStringValue("search", getCloudPcRecommendationReportsPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getCloudPcRecommendationReportsPostRequestBody.select);
    writer.writeNumberValue("skip", getCloudPcRecommendationReportsPostRequestBody.skip);
    writer.writeNumberValue("top", getCloudPcRecommendationReportsPostRequestBody.top);
    writer.writeAdditionalData(getCloudPcRecommendationReportsPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetCloudPcRecommendationReportsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/reports/getCloudPcRecommendationReports";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetCloudPcRecommendationReportsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetCloudPcRecommendationReportsRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetCloudPcRecommendationReportsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
