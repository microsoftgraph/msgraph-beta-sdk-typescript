/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getAllCertificatesReportPostRequestBody
 */
export function createGetAllCertificatesReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetAllCertificatesReportPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetAllCertificatesReportPostRequestBody(getAllCertificatesReportPostRequestBody: Partial<GetAllCertificatesReportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getAllCertificatesReportPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getAllCertificatesReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getAllCertificatesReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getAllCertificatesReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getAllCertificatesReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getAllCertificatesReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getAllCertificatesReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getAllCertificatesReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getAllCertificatesReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getAllCertificatesReportPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetAllCertificatesReportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The filter property
     */
    filter?: string;
    /**
     * The groupBy property
     */
    groupBy?: string[];
    /**
     * The name property
     */
    name?: string;
    /**
     * The orderBy property
     */
    orderBy?: string[];
    /**
     * The search property
     */
    search?: string;
    /**
     * The select property
     */
    select?: string[];
    /**
     * The sessionId property
     */
    sessionId?: string;
    /**
     * The skip property
     */
    skip?: number;
    /**
     * The top property
     */
    top?: number;
}
/**
 * Provides operations to call the getAllCertificatesReport method.
 */
export interface GetAllCertificatesReportRequestBuilder extends BaseRequestBuilder<GetAllCertificatesReportRequestBuilder> {
    /**
     * Invoke action getAllCertificatesReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     post(body: GetAllCertificatesReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Invoke action getAllCertificatesReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetAllCertificatesReportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetAllCertificatesReportPostRequestBody(writer: SerializationWriter, getAllCertificatesReportPostRequestBody: Partial<GetAllCertificatesReportPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("filter", getAllCertificatesReportPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getAllCertificatesReportPostRequestBody.groupBy);
    writer.writeStringValue("name", getAllCertificatesReportPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getAllCertificatesReportPostRequestBody.orderBy);
    writer.writeStringValue("search", getAllCertificatesReportPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getAllCertificatesReportPostRequestBody.select);
    writer.writeStringValue("sessionId", getAllCertificatesReportPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getAllCertificatesReportPostRequestBody.skip);
    writer.writeNumberValue("top", getAllCertificatesReportPostRequestBody.top);
    writer.writeAdditionalData(getAllCertificatesReportPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetAllCertificatesReportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetAllCertificatesReportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetAllCertificatesReportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getAllCertificatesReport";
/* tslint:enable */
/* eslint-enable */