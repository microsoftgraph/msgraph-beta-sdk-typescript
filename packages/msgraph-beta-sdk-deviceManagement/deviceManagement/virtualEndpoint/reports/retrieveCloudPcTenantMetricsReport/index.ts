/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { CloudPCPerformanceReportName, CloudPCPerformanceReportNameObject } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RetrieveCloudPcTenantMetricsReportPostRequestBody}
 */
// @ts-ignore
export function createRetrieveCloudPcTenantMetricsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRetrieveCloudPcTenantMetricsReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param RetrieveCloudPcTenantMetricsReportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRetrieveCloudPcTenantMetricsReportPostRequestBody(retrieveCloudPcTenantMetricsReportPostRequestBody: Partial<RetrieveCloudPcTenantMetricsReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "orderBy": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "reportName": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.reportName = n.getEnumValue<CloudPCPerformanceReportName>(CloudPCPerformanceReportNameObject); },
        "search": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "skip": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { retrieveCloudPcTenantMetricsReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface RetrieveCloudPcTenantMetricsReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
    reportName?: CloudPCPerformanceReportName | null;
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
 * Provides operations to call the retrieveCloudPcTenantMetricsReport method.
 */
export interface RetrieveCloudPcTenantMetricsReportRequestBuilder extends BaseRequestBuilder<RetrieveCloudPcTenantMetricsReportRequestBuilder> {
    /**
     * Get a report related to the performance of Cloud PCs.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcreports-retrievecloudpctenantmetricsreport?view=graph-rest-beta|Find more info here}
     */
     post(body: RetrieveCloudPcTenantMetricsReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get a report related to the performance of Cloud PCs.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RetrieveCloudPcTenantMetricsReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RetrieveCloudPcTenantMetricsReportPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRetrieveCloudPcTenantMetricsReportPostRequestBody(writer: SerializationWriter, retrieveCloudPcTenantMetricsReportPostRequestBody: Partial<RetrieveCloudPcTenantMetricsReportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!retrieveCloudPcTenantMetricsReportPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", retrieveCloudPcTenantMetricsReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", retrieveCloudPcTenantMetricsReportPostRequestBody.groupBy);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", retrieveCloudPcTenantMetricsReportPostRequestBody.orderBy);
    writer.writeEnumValue<CloudPCPerformanceReportName>("reportName", retrieveCloudPcTenantMetricsReportPostRequestBody.reportName);
    writer.writeStringValue("search", retrieveCloudPcTenantMetricsReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", retrieveCloudPcTenantMetricsReportPostRequestBody.select);
    writer.writeNumberValue("skip", retrieveCloudPcTenantMetricsReportPostRequestBody.skip);
    writer.writeNumberValue("top", retrieveCloudPcTenantMetricsReportPostRequestBody.top);
    writer.writeAdditionalData(retrieveCloudPcTenantMetricsReportPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RetrieveCloudPcTenantMetricsReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/reports/retrieveCloudPcTenantMetricsReport";
/**
 * Metadata for all the requests in the request builder.
 */
export const RetrieveCloudPcTenantMetricsReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RetrieveCloudPcTenantMetricsReportRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRetrieveCloudPcTenantMetricsReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
